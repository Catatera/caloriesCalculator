const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const gender = getSelectedValue('gender'); // select do ID gender
    const age = Number(document.getElementById('age').value);
    const height = Number(document.getElementById('height').value);
    const weight = Number(document.getElementById('weight').value);
    const activityLevel = getSelectedValue('activity_level')

    const tmb =Math.round(
        gender === 'female'
            ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
            : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
    );

    const maintenance = Math.round(tmb * Number(activityLevel));
    const loseWeight = maintenance - 450;
    const gainWeight = maintenance + 450;
    const layout = `
        <h2>Aqui está o resultado:</h2>
        <div class="result-content">
        <ul>
            <li>
            Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
            </li>
            <li>
            Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
            </li>
            <li>
            Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
            </li>
            <li>
            Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
            </li>
        </ul>
        </div>
    `

    const result = document.getElementById('result');
    result.innerHTML = layout;
}

function checkData() { 
    
}

function getSelectedValue(id) { 
    const select = document.getElementById(id); 
    return select.options[select.selectedIndex].value;
}

