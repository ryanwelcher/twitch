// 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

const response = await fetch('https://api.openai.com/v1/images/generations', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		Authorization:
			'Bearer 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',
		// 'Content-Type': 'application/x-www-form-urlencoded',
	},
	body: JSON.stringify({
		prompt: 'a white siamese cat',
		n: 1,
		size: '1024x1024',
	}), // body data type must match "Content-Type" header
});

async function createFile() {
	let response = await fetch(
		'https://oaidalleapiprodscus.blob.core.windows.net/private/org-SBOityQGi7PUSAPE7HzBORgj/user-fw53SSvvxVrogrgjXc8HapDs/img-wUZEc6JdIhBtUTvuXfSp0jFW.png?st=2023-01-31T14%3A11%3A27Z&se=2023-01-31T16%3A11%3A27Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-01-30T22%3A20%3A20Z&ske=2023-01-31T22%3A20%3A20Z&sks=b&skv=2021-08-06&sig=GFEAFk3ceYzYv6XBLjdkd0939Ep9hUODfAZ8YUsT32Q%3D',
		{
			mode: 'no-cors', // no-cors, *cors, same-origin
		}
	);
	let data = await response.blob();
	let metadata = {
		type: 'image/png',
	};
	let file = new File([data], 'test.png', metadata);
	return file;
	// ... do something with the file or return it
}
console.log(createFile());
