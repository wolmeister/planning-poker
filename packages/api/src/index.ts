import type { NextApiRequest, NextApiResponse } from 'next';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import type { ApiRoute } from './types';
import { routes as userRoutes } from './modules/user';
import { HttpError } from './errors/http-error';

const routes: ApiRoute[] = [...userRoutes];

export async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const requestedRouteParts: string[] = req.query.slug as string[];

  /**
   * The route that will handle the request.
   */
  let matchedRoute: ApiRoute | null = null;

  /**
   * Flag indicating that a route with this path exists,
   * but not necessarily for the requested HTTP method.
   */
  let pathFound = false;

  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];
    const routeParts: string[] = (route.path.startsWith('/')
      ? route.path.substring(1)
      : route.path
    ).split('/');

    if (routeParts.length === requestedRouteParts.length) {
      const pathMatches = routeParts.every(
        (routePart, routePartIndex) =>
          routePart === requestedRouteParts[routePartIndex] ||
          requestedRouteParts[routePartIndex].startsWith(':')
      );

      if (pathMatches) {
        pathFound = true;

        if (route.method === req.method) {
          matchedRoute = route;
          break;
        }
      }
    }
  }

  if (matchedRoute) {
    try {
      await matchedRoute.handle(req, res);
    } catch (err) {
      if (err instanceof HttpError) {
        res.status(err.statusCode).send(err.message);
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
      }
    }
  } else if (pathFound) {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send(ReasonPhrases.METHOD_NOT_ALLOWED);
  } else {
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
  }
}
