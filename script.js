// exp1 : 
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
  }
  
  // Exemple
  console.log(inverserChaine("non")); // Résultat: non

  function compterCaracteres(chaine) {
    return chaine.length;
  }
  
  // Exemple
  console.log(compterCaracteres("non")); // Résultat: 3

  function mettreMotsEnMajuscule(phrase) {
    return phrase.replace(/\b\w/g, function(l) { return l.toUpperCase(); });
  }
  
  // Exemple
  console.log(mettreMotsEnMajuscule("bonjour tout le monde")); // Résultat: Bonjour Tout Le Monde
      

  // exp2 : 
  function trouverMaximum(tableau) {
    return Math.max(...tableau);
  }
  
  function trouverMinimum(tableau) {
    return Math.min(...tableau);
  }

  
  // Exemple
  const tableau = [5, 8, 2, 15, 3];
  console.log(trouverMaximum(tableau)); // Résultat: 15
  console.log(trouverMinimum(tableau)); // Résultat: 2

  function sommeTableau(tableau) {
    return tableau.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Exemple
  console.log(sommeTableau([1, 2, 3, 4])); // Résultat: 10

  function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
  }
  
  // Exemple : Filtrer les nombres pairs
  const tableauNombres = [1, 2, 3, 4, 5, 6];
  const nombresPairs = filtrerTableau(tableauNombres, nombre => nombre % 2 === 0);
  console.log(nombresPairs); // Résultat: [2, 4, 6]

  // expl3 :
  function factorielle(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorielle(n - 1);
    }
  }
  
  // Exemple
  console.log(factorielle(5)); // Résultat: 120
  function estPremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre <= 3) return true;
  
    if (nombre % 2 === 0 || nombre % 3 === 0) return false;
  
    for (let i = 5; i * i <= nombre; i += 6) {
      if (nombre % i === 0 || nombre % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  // Exemple
  console.log(estPremier(11)); // Résultat: true
  function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // Exemple : Générer les 10 premiers termes de la séquence de Fibonacci
  console.log(fibonacci(10)); // Résultat: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
      
  