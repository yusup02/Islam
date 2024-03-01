const button = document.getElementById('button');
button.addEventListener('click', goToAppStore);

function goToAppStore() {
  let platform = getPlatform()

  if (platform == 'iPhone') {
    window.location.href = 'https://itunes.apple.com/app/id1452368807';
  }

  if (platform == 'Android') {
    window.location.href = 'http://play.google.com/store/apps/details?id=islam.islamapp';
  }

  if (platform == 'Macintosh') {
    window.location.href = 'https://itunes.apple.com/app/id1452368807';
  }
}

function getPlatform() {
  let userDeviceArray = [
    { device: 'Android', platform: /Android/ },
    { device: 'iPhone', platform: /iPhone/ },
    { device: 'iPad', platform: /iPad/ },
    { device: 'Symbian', platform: /Symbian/ },
    { device: 'Windows Phone', platform: /Windows Phone/ },
    { device: 'Tablet OS', platform: /Tablet OS/ },
    { device: 'Linux', platform: /Linux/ },
    { device: 'Windows', platform: /Windows NT/ },
    { device: 'Macintosh', platform: /Macintosh/ }
  ];

  let platform = navigator.userAgent;

  for (var i in userDeviceArray) {
    if (userDeviceArray[i].platform.test(platform)) {
      return userDeviceArray[i].device;
    }
  }
  return 'Неизвестная платформа!' + platform;
}
