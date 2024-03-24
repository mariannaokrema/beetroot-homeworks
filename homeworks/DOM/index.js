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
  function addItemToList(author, song) {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = `${author} - ${song}`;
    DOMList.appendChild(li);
  }

  playList.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = `${item.author} - ${item.song}`;

    li.style.cssText =
      'padding-top: 20px; padding-bottom: 20px; padding-left: 20px; cursor: pointer;';

    //  зміна кольору при наведенні мишкою
    li.addEventListener('mouseenter', () => {
      if (index % 2 === 0) {
        li.style.backgroundColor = '#c1c06f';
      } else {
        li.style.backgroundColor = '#73431C';
      }
    });

    li.addEventListener('mouseleave', () => {
      // Повертаємо колір до початкового після того, як мишка покидає елемент
      if (index % 2 === 0) {
        li.style.backgroundColor = '#D7D67C';
      } else {
        li.style.backgroundColor = '#905424';
      }
    });

    DOMList.appendChild(li);
  });

  DOMList.style.cssText =
    'font-family: Satisfy; list-style-type: none; margin-left: 20px;  padding-left: 0px; border: 2px solid #482A12; border-radius: 5px';
}
