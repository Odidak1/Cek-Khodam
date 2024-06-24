function cekKhodam() {
    var inputNama = document.getElementById('namaInput').value.trim();
    if (inputNama !== '') {
        var loading = document.createElement('div');
        loading.className = 'loading';
        
        var spinner = document.createElement('div');
        spinner.className = 'spinner';
        loading.appendChild(spinner);

        var loadingText = document.createElement('div');
        loadingText.className = 'loading-text';
        loadingText.innerText = 'Tunggu sebentar sedang mengecek khodammu';
        loading.appendChild(loadingText);
        
        document.getElementById('hasilKhodam').innerHTML = '';
        document.getElementById('hasilKhodam').appendChild(loading);

        setTimeout(function() {
            var khodamList = [
                'Khodam Harimau Perkasa',
                'Khodam Singa Sakti',
                'Khodam Naga Emas',
                'Khodam Rajawali Terbang',
                'Khodam Garuda Mulia',
                'Khodam Phoenix Abadi',
                'Khodam Kuda Putih',
                'Khodam Serigala Ajaib',
                'Khodam Macan Tutul',
                'Khodam Elang Raja',
                'Khodam Ular Naga',
                'Khodam Phoenix Api',
                'Khodam Kijang Lestari',
                'Khodam Kancil Cepat',
                'Khodam Burung Merak',
                'Khodam Kepiting Biru',
                'Khodam Nyi Blorong',
                'Khodam Ki Chayo Sujarwo',
                'Khodam Mbah Urip',
                'Khodam Raden Wildan Wirosobo',
                'Khodam Ki Cakrabuana',
            ];
            var randomIndex = Math.floor(Math.random() * khodamList.length);
            var randomKhodam = khodamList[randomIndex];

            var hasilText = document.createElement('div');
            hasilText.innerText = `Khodam untuk "${inputNama}": ${randomKhodam}`;
            
            document.getElementById('hasilKhodam').innerHTML = '';
            document.getElementById('hasilKhodam').appendChild(hasilText);
        }, 0);
    } else {
        alert('Silakan masukkan nama kamu terlebih dahulu!');
    }
}
