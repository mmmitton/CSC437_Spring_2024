export function relayEvent(event, customType, detail) {
    const relay = event.currentTarget;
    const customEvent = new CustomEvent(customType, {
      bubbles: true,
      detail
    });

    console.log(event)
  
    relay.dispatchEvent(customEvent);
    event.stopPropagation();
  }