/**
 * Represents an event handling interface for managing subscriptions and publications of events.
 *
 * @typeParam TPayload - The type of data that can be included with each event.
 */
export interface IEvent<TPayload> {
    /**
     * Subscribe to events of a specific topic with a callback function.
     *
     * @param topic - The topic or event name to subscribe to.
     * @param callback - A function to be called when the event is published, receiving a payload as an argument.
     */
    subscribe(topic: string, callback: (payload: TPayload) => void): void;

    /**
     * Publish an event to a specific topic with an optional payload.
     *
     * @param topic - The topic or event name to publish.
     * @param payload - Optional data to include with the event.
     */
    publish(topic: string, payload?: TPayload): void;

    /**
     * Unsubscribe from events of a specific topic with a callback function.
     *
     * @param topic - The topic or event name to unsubscribe from.
     * @param callback - The callback function to remove as a subscriber.
     */
    unsubscribe(topic: string, callback: (payload: TPayload) => void): void;

    /**
     * Check if there are active subscribers for a specific event topic.
     *
     * @param topic - The topic or event name to check for active subscribers.
     * @returns True if there are active subscribers; otherwise, false.
     */
    hasSubscribers(topic: string): boolean;
}
