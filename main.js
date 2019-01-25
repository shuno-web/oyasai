'use strict';

{
  const ios = document.getElementById('ios');
  const android = document.getElementById('android');
  const iosDesc = document.getElementById('ios_desc');
  const androidDesc = document.getElementById('android_desc');

  ios.addEventListener('click', () => {
    iosDesc.classList.remove('hidden');
    androidDesc.classList.add('hidden');
  });

  android.addEventListener('click', () => {
    iosDesc.classList.add('hidden');
    androidDesc.classList.remove('hidden');
  });
}
