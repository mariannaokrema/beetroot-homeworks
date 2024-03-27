const playList = [
  { author: 'LED ZEPPELIN', song: 'STAIRWAY TO HEAVEN' },
  { author: 'QUEEN', song: 'BOHEMIAN RHAPSODY' },
  { author: 'LYNYRD SKYNYRD', song: 'FREE BIRD' },
  { author: 'DEEP PURPLE', song: 'SMOKE ON THE WATER' },
  { author: 'JIMI HENDRIX', song: 'ALL ALONG THE WATCHTOWER' },
  { author: 'AC/DC', song: 'BACK IN BLACK' },
  { author: 'QUEEN', song: 'WE WILL ROCK YOU' },
  { author: 'METALLICA', song: 'ENTER SANDMAN' },
];

const DOMList = document.getElementById('js-list');

if (DOMList) {
  function addItemToList(author, song, index) {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = `${author} - ${song}`;
    li.style.cssText = `padding-top: 20px; padding-bottom: 20px; padding-left: 20px; cursor: pointer; background-color: #8c5631; color: #E3BD91;
    }`;

    // Додамо обробник події 'mouseenter'
    li.addEventListener('mouseenter', () => {
      li.style.backgroundColor = index % 2 === 0 ? '#E9AB17' : '#73431C';
      li.style.color = index % 2 === 0 ? '#73431C' : '#E9AB17';
    });

    // Додамо обробник події 'mouseleave'
    li.addEventListener('mouseleave', () => {
      li.style.backgroundColor = '#8c5631';
      li.style.color = '#E3BD91';
    });

    DOMList.appendChild(li);
  }

  playList.forEach((item, index) => {
    addItemToList(item.author, item.song, index);
  });

  DOMList.style.cssText =
    'font-family: Satisfy; list-style-type: none; margin-left: 20px;  padding-left: 0px; border: 2px solid #482A12; border-radius: 5px';
}

// background-color: ${index % 2 === 0 ? '#D7D67C' : '#905424'
