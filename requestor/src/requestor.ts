import { FetchMessage } from 'get';
import { ProduceMessage } from 'producer';

const bootstrap = async () => {
    await ProduceMessage('Hi,');
    const message = await FetchMessage();

    console.log(message);
};

bootstrap();