import { FetchMessage } from 'get';
import { ProduceMessage } from 'producer';

const bootstrap = async () => {
    await ProduceMessage('Hi,');
    // @todo fetch token to check it later in fetch message
    // @todo here we can consume another `message.v1.registered` event to fetch the token
    // @todo then we check it when we are polling messages
    const message = await FetchMessage();

    console.log(message);
};

bootstrap();