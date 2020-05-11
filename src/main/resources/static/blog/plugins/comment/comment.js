var gitalk = new Gitalk({
    clientID: 'a516656e0771bd8b848d',
    clientSecret: '6d1d84881826af01d2139470361214d5b45a725a',
    repo: 'gitalk_comments_repo',
    owner: 'yuchengwto',
    admin: ['yuchengwto'],
    id: location.pathname,      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})

gitalk.render('gitalk-container')