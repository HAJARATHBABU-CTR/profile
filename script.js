document.addEventListener('DOMContentLoaded', () => {
  const followBtn = document.getElementById('followBtn');
  let isFollowing = false;

  followBtn.addEventListener('click', () => {
    isFollowing = !isFollowing;

    if (isFollowing) {
      followBtn.textContent = 'Following';
      followBtn.classList.add('following');
    } else {
      followBtn.textContent = 'Follow';
      followBtn.classList.remove('following');
    }
  });
});
