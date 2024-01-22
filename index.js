const imgs = [
  {url: 'https://th.bing.com/th/id/OIP._cbjLskI7xDXA5PtusdxogHaH_?rs=1&pid=ImgDetMain', alt: 'item-1'},
  {url: 'https://storage.ko-fi.com/cdn/useruploads/post/jpg_kofi_fecf3b68-db41-48e4-a1d2-e55e738e2d2159526608_n.jpg', alt: 'item-2'},
  {url: 'https://assets.mycast.io/posters/beluga-the-texts-of-life-fan-casting-poster-292279-medium.jpg?1677104636', alt: 'item-3'},
  {url: 'https://th.bing.com/th/id/OIP.qvS6FVZ4f9jU-qZBxw4mWQHaGa?rs=1&pid=ImgDetMain', alt: 'item-4'}
];
const container = document.getElementById('container');

// Fisher Yates Algorithm
function shuffleItems(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function renderItems(arr) {
  for(let i = 0; i < 4; i++) {
    const shuffledImgArray = shuffleItems(arr);
    shuffledImgArray.forEach((item) => {
      const imgElement = document.createElement('img');
      
      imgElement.src = item.url;
      imgElement.alt = item.alt;
      imgElement.width = 150;
      imgElement.height = 250;
      container.appendChild(imgElement);

      let selectedCards = [];
      imgElement.addEventListener('click', (event) => {
        const clickedCard = event.target;

        // ignore matched items
        if (clickedCard.classList.contains('matched')) {
          return;
        }
        // THERE IS A BUG. (UNEXPECTED BEHAVIOR)
        clickedCard.classList.add('selected');
        selectedCards.push(clickedCard);
        if (selectedCards.length === 2) {
          if (selectedCards[0].getAttribute('alt') === selectedCards[1].getAttribute('alt')) {
            
            selectedCards.forEach(card => {
              card.classList.add('matched');
            });
            selectedCards = [];
          }
          else {
            setTimeout(() => {
              selectedCards.forEach(card => {
                card.classList.remove('selected');
              });
              selectedCards = [];
            }, 1000);
          }
        }
        console.log(selectedCards);
      });
    });
  }
  // Callback hell? 💀
}

// function checkIdentical() {
//   const imgTags = container.children;
//   for (let i = 0; i < imgTags.length; i++) {
//     imgTags[i].addEventListener('click', () => {
//       // let selectedImg = imgTags[i].getAttribute('alt');
//     });
//   }
// }

// renderItems(imgs);
// checkIdentical();
