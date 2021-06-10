export function Variables({ asyncapi }) {
  const apiName = asyncapi.info().title();

  const channelEntries = Object.keys(asyncapi.channels()).length ? Object.entries(asyncapi.channels()) : [];
  const channels = channelEntries.map(([channelName, channel]) => `${channelName}`);

  return `
  "variables": {
    "serviceBusName": "${apiName}",
    "serviceBusQueues": [${channels.join(',')}]
  }
`;
}
