// Đợi DOM load xong mới chạy code
document.addEventListener('DOMContentLoaded', () => {
  // Cuộn đến section
  document.getElementById('scroll-about').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('scroll-users').addEventListener('click', () => {
    document.getElementById('users').scrollIntoView({ behavior: 'smooth' });
  });

  // DOM Traversing + Event Delegation
  const userList = document.getElementById('user-list');
  const infoBox = document.getElementById('user-detail');

  userList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      const userName = e.target.dataset.name;
      showUserInfo(userName);
    }
  });

  // Truyền tham số qua arrow function
  function showUserInfo(name) {
    infoBox.textContent = `Bạn đã chọn: ${name}`;
  }

  // Bubbling vs Capturing demo
  const usersSection = document.getElementById('users');

  usersSection.addEventListener('click', () => {
    console.log('👣 Capturing event trên #users');
  }, true);

  usersSection.addEventListener('click', () => {
    console.log('🎈 Bubbling event trên #users');
  });
});
