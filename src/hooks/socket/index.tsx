import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { env } from '../../config/env';

export const useSocket = (): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(env.API_URL);
    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return socket;
};
