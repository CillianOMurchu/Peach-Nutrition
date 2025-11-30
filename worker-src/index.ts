import { SQSEvent, Context, SQSBatchResponse } from 'aws-lambda';

export const handler = async (event: SQSEvent, context: Context): Promise<SQSBatchResponse> => {
    console.log(`Received ${event.Records.length} messages from SQS.`);

    const batchItemFailures: { itemIdentifier: string }[] = [];

    for (const record of event.Records) {
        try {
            const orderPayload = JSON.parse(record.body);
            console.log(`[ORDER PROCESSOR] Successfully processing Order ID: ${orderPayload.userId} with ${orderPayload.items.length} items.`);
        } catch (error) {
            console.error('Error processing SQS record:', error);
            batchItemFailures.push({ itemIdentifier: record.messageId });
        }
    }

    return { batchItemFailures };
};