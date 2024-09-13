document.addEventListener("DOMContentLoaded", function () {
    const navbarHtml = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <img class="navbar-brand" src="../assets/images/logo.png" width="50px" height="60px">
                <a class="navbar-brand" href="../index.html" style="font-size:33px; font-weight:450">
                    GLOBE
                </a>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav" style="font-size:20px">
                        <li class="nav-item mx-2 dropdown">
                            <a class="nav-link" href="../pages/calendar.html">2024 활동 계획</a>
                        </li>
                        
                        <li class="nav-item mx-2 dropdown">
                            <a class="nav-link" href="../pages/awards.html">대회 실적</a>
                        </li>
                        
                        <li class="nav-item mx-2 dropdown">
                            <a class="nav-link" href="../pages/seminar.html">세미나 자료</a>
                        </li>
                        <li class="nav-item mx-2 dropdown">
                            <a class="nav-link" href="../pages/research.html">연구 활동</a>
                        </li>
                    </ul>
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navbarHtml);
});
