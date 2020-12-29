//Pesanan Pak Arman

hitungPPN = (p, l, harga) => {
    let hargaTanah = p * l * harga;
    let PPN = (hargaTanah * 15) / 100;
    let total = PPN + hargaTanah;
    return total.toString();
  };
  
  let total = hitungPPN(20.5, 30, 1500000)
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)
    .map((x) => x.split('').reverse().join(''))
    .reverse()
    .join('.');
  console.log('Rp' + total);
  
  //output "Rp1.060.875.000"
  
  