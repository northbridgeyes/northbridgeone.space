document.addEventListener('DOMContentLoaded', function () {
    const terminalOptions = document.querySelector('.terminal-options');

    function simulateScroll() {
        const currentScrollPosition = terminalOptions.scrollTop;
        const scrollInterval = setInterval(() => {
            terminalOptions.scrollTop = currentScrollPosition + 1;

            if (terminalOptions.scrollTop >= terminalOptions.scrollHeight - terminalOptions.offsetHeight) {
                clearInterval(scrollInterval);
            }
        }, 10);
    }

    terminalOptions.addEventListener('click', simulateScroll