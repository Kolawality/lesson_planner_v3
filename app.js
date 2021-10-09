window.addEventListener('load', () => {

    const params = (new URL(document.location)).searchParams;
    const objective = params.get('objective');
    const success1 = params.get('success1');
    const success2 = params.get('success2');
    const success3 = params.get('success3');

    document.getElementById('objective-entered').innerHTML = objective;
    document.getElementById('success1').innerHTML = success1;
    document.getElementById('success2').innerHTML = success2;
    document.getElementById('success3').innerHTML = success3;
})



