// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面的文件名
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 获取所有菜单项
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    // 遍历所有菜单项
    menuItems.forEach(item => {
        // 如果当前页面URL与菜单项的href匹配，添加active类
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
        
        // 添加点击事件
        item.addEventListener('click', function() {
            // 移除所有菜单项的active类
            menuItems.forEach(i => i.classList.remove('active'));
            // 给被点击的菜单项添加active类
            this.classList.add('active');
            // 将当前活动菜单保存到localStorage
            localStorage.setItem('activeMenu', this.getAttribute('href'));
        });
    });
    
    // 从localStorage恢复上次的活动菜单
    const lastActiveMenu = localStorage.getItem('activeMenu');
    if (lastActiveMenu) {
        const menuItem = document.querySelector(`.nav-menu a[href="${lastActiveMenu}"]`);
        if (menuItem) {
            menuItem.classList.add('active');
        }
    }
});
