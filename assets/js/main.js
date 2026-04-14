 function showView(viewId) {
            document.querySelectorAll('.view').forEach(v => { v.classList.remove('active'); setTimeout(() => { v.style.display = 'none'; }, 50); });
            setTimeout(() => { const target = document.getElementById(viewId); target.style.display = 'flex'; setTimeout(() => { target.classList.add('active'); }, 50); }, 100);
        }
        function toggleQA(element) { element.classList.toggle('active'); }