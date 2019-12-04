let protooPort = 443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId, forceH264, forceVP9 })
{
	const hostname = 'mediasoup.edu.barco.cloud';
	let url = `ws://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;

	if (forceH264)
		url = `${url}&forceH264=true`;
	else if (forceVP9)
		url = `${url}&forceVP9=true`;

	return url;
}
