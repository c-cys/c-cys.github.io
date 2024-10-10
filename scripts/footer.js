const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = '../stylesheets/footer.css';
document.head.appendChild(linkElement);

const footer = document.createElement('div');
footer.id = 'copyright';

footer.innerHTML = `
    <div id="copyline">
        <a class="navbar-brand" href="../index.html">
            <img src="../assets/images/logo.png" height="30px">
        </a>
        <span class="copyright" style="font-size:18px; color:white; margin-left:5px">경기북과학고등학교 유일 환경·에너지 동아리 GLOBE</span>
        <p class="copyright" style="font-size:14px; margin-left:40px; margin-top:5px">Global Learning and Observations to Benefit the Environment</p>
        <p class="copyright" style="font-size:13px; margin-left:40px; color:grey; margin-top:3px">경기도 의정부시 체육로135번길 32</p>
    </div>
`;

document.body.appendChild(footer);