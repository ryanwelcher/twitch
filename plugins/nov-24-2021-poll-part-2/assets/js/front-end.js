(function () {
	const voteButtons = document.querySelectorAll('.vote-button');
	const voteBars = document.querySelectorAll('.vote-bar');

	const displayMessage = (message) => {
		const messageElement = document.querySelector('.message');
		messageElement.textContent = message;
	};

	const disableButtons = (buttonList) => {
		buttonList.forEach((button) => button.setAttribute('disabled', true));
	};

	const registerVote = (button) => {
		const voteBar = button.nextElementSibling.nextElementSibling;
		const currentCount = voteBar.getAttribute('data-count');
		voteBar.setAttribute('data-count', Number(currentCount) + 1);
		window.localStorage.setItem('voted', true);
	};

	const renderPollBars = (bars) => {
		// Get the total value of all votes
		const totalVotes = Array.from(bars).reduce((value, element) => {
			return value + Number(element.getAttribute('data-count'));
		}, 0);

		// display the percentages
		bars.forEach((bar) => {
			const count = bar.getAttribute('data-count');
			bar.style.width = (count / totalVotes) * 100 + '%';
		});
	};

	// Render the bars
	renderPollBars(voteBars);

	// check to see if the user has already voted
	if (!window.localStorage.getItem('voted')) {
		voteButtons.forEach((button) => {
			button.addEventListener('click', () => {
				// 1. Register a vote
				registerVote(button);
				// 2. Disable the buttons
				disableButtons(voteButtons);
				// 3. Redraw the vote bars
				renderPollBars(voteBars);
				// 4. Display the message
				displayMessage('Thanks for voting!');
			});
		});
	} else {
		disableButtons(voteButtons);
		displayMessage('Looks like you already voted');
	}
})();
