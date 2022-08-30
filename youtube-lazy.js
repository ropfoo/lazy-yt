(function () {
    function createYTElement(parent, url) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', url);
        iframe.setAttribute('frameborder', 0);
        iframe.setAttribute('allow', 'autoplay');

        
        parent.appendChild(iframe);
        // const button = iframe.conte  ntWindow.querySelector( 'ytp-button')
        // console.log(button)
        // iframe.onload = () => {
        //      const button = iframe.contentWindow.querySelector( '.ytp-button')
        // console.log(button)
        // }
    }

    function createYTPlayButton(parent, callback) {
        const button = document.createElement('button');
        button.classList.add('play-wrapper');
        button.addEventListener('click', callback);

        const icon = document.createElement('div');
        icon.classList.add('play-icon');
        button.appendChild(icon);

        parent.appendChild(button);
    }

    function createPreviewImage(parent) {
        const img = document.createElement('img');
        img.setAttribute(
            'src',
            `https://img.youtube.com/vi/${parent.id}/sddefault.jpg`
        );

        parent.appendChild(img);
    }

    function init() {
        const ytWrappers = document.querySelectorAll('.yt-lazy');
        if (ytWrappers.length) {
            ytWrappers.forEach(ytWrapper => {
                const url = `https://www.youtube-nocookie.com/embed/${ytWrapper.id}?showinfo=0&rel=0&autoplay=1&controls=1`;
                createPreviewImage(ytWrapper);
                createYTPlayButton(ytWrapper, () =>
                    createYTElement(ytWrapper, url)
                );
            });
        }
    }

    init();
})();
