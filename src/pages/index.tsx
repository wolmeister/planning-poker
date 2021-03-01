import React from 'react';
import Head from 'next/head';

import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Planning Poker</title>
      </Head>
      <div id="root">
        <span
          style={{
            position: 'absolute',
            fontFamily: 'Rowdies',
            fontWeight: 700,
            fontSize: '30px',
            top: '30px',
            left: '50px',
          }}
        >
          DevPoker
        </span>
        <div
          style={{
            display: 'flex',
            maxWidth: '1022px',
            justifyContent: 'space-between',
            margin: '0 auto',
          }}
        >
          <Card>
            <form style={{ width: '320px' }}>
              <fieldset style={{ margin: '0', padding: '0', border: '0' }}>
                <legend
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  Crie uma sala
                </legend>
                <Input placeholder="Seu nome" style={{ marginBottom: '12px', width: '100%' }} />
                <Input placeholder="Nome da sala" style={{ width: '100%' }} />
              </fieldset>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                <Button>Entrar</Button>
                <Button style={{ marginLeft: 'auto' }}>Espectar</Button>
              </div>
            </form>
          </Card>
          <Card>
            <form style={{ width: '320px' }}>
              <fieldset style={{ margin: '0', padding: '0', border: '0' }}>
                <legend
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  Entrar em uma sala
                </legend>
                <Input placeholder="Seu nome" style={{ marginBottom: '12px', width: '100%' }} />
                <Input placeholder="Código da sala" style={{ width: '100%' }} />
              </fieldset>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                <Button>Entrar</Button>
                <Button style={{ marginLeft: 'auto' }}>Espectar</Button>
              </div>
            </form>
          </Card>
        </div>
        {/* <div>
        <span>ATTENTION: This site is in development and may not work at all.</span>
      </div> */}
      </div>
    </>
  );
}
