const form = document.getElementById('form');
const number = document.getElementById('number');
const text = document.getElementById('text');

const randomText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida lacus vel leo tincidunt, id ullamcorper   neque pulvinar. Praesent lobortis justo in egestas elementum. Morbi ac consectetur ex, eget rhoncus nibh. Fusce et mauris a dui mattis bibendum. Quisque eros felis, finibus id elit a, blandit pharetra turpis. Vestibulum imperdiet dui nunc. In dignissim, quam ac congue tempor, turpis nibh accumsan dui, fringilla scelerisque ex ligula vel mi. Vestibulum tortor metus, tincidunt sed neque quis, hendrerit maximus turpis. Pellentesque feugiat massa a arcu pulvinar feugiat quis ut sem. Proin quam dolor, tempus sit amet felis non, iaculis pharetra ligula. Donec vehicula pretium velit, eget efficitur libero pretium et. Nullam pretium turpis vel nibh ultrices suscipit.',

'Pellentesque tincidunt fringilla metus, vel ultricies tellus ultricies nec. Duis euismod turpis in tellus hendrerit, eget convallis justo eleifend. Duis ante orci, eleifend eu justo laoreet, viverra eleifend massa. Fusce sagittis, velit ullamcorper tristique placerat, libero eros rutrum justo, hendrerit sollicitudin enim ipsum eu leo. Nulla cursus viverra interdum. Nulla sapien neque, ornare non scelerisque eu, feugiat quis urna. Cras blandit ex sed diam imperdiet finibus. Nunc in eros massa. Morbi vulputate sed nibh sed faucibus. Phasellus sed sodales ipsum, a condimentum magna. Sed fermentum consectetur dolor sit amet vestibulum. Mauris egestas enim et feugiat convallis. Etiam quis velit eu elit sodales accumsan vel eu odio.',

'Nulla facilisi. Pellentesque sit amet tempor mi, vitae aliquet risus. Praesent vulputate ex mi, nec aliquet ex mattis id. Suspendisse v ehicula nulla ac massa porta laoreet. Praesent rhoncus sollicitudin sapien, eu maximus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at semper purus.',

'Proin sed sem nisl. Aenean id felis quis ligula bibendum bibendum non sit amet nulla. Nunc condimentum tellus lectus, in consectetur odio porta vel. Integer vehicula at neque eu tristique. Proin varius, magna non consequat porta, nulla augue consectetur orci, et vehicula augue nulla eget libero. Vestibulum rutrum libero tempor, ornare urna iaculis, tempor urna. Phasellus luctus at felis non mollis. Duis et mi odio. Ut nisi libero, placerat eget ante commodo, fringilla eleifend dolor. Nullam dignissim vel turpis eget aliquet. Morbi maximus commodo pretium. Donec finibus at neque vitae ullamcorper. Suspendisse tincidunt gravida est a mollis.',

'Cras tempor vulputate mattis. Etiam posuere, orci sed placerat porttitor, sapien metus vestibulum erat, id consequat sem nisl molestie tortor. Praesent aliquet auctor ex eget vehicula. Vivamus condimentum porta magna, non feugiat sem porttitor et. Suspendisse pharetra, ex quis tincidunt tempor, lorem est interdum dui, et posuere nisl enim a justo. Nulla ac tortor bibendum urna tristique semper vel a erat. Aenean laoreet sem nulla, ut finibus sem vestibulum at.',

'Vivamus nec nisl in quam tristique accumsan. Nulla accumsan velit et tincidunt aliquet. Proin egestas efficitur lorem congue dapibus. Fusce malesuada, tellus nec aliquet imperdiet, neque leo fringilla orci, vel pellentesque turpis arcu vel risus. Cras a ullamcorper justo. Aliquam maximus sagittis leo tempor posuere. Ut laoreet justo metus, ac posuere neque porta sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

'Aliquam erat volutpat. Praesent a placerat metus, quis vehicula nulla. Morbi non elementum eros. Integer nec tincidunt urna. Ut fermentum neque nec purus aliquam pellentesque. Proin euismod risus nibh, et egestas urna vehicula ut. In elementum est id elementum tempor. Morbi convallis nisi vel enim semper egestas. Praesent risus felis, luctus id lobortis cursus, consequat quis massa. Quisque dolor mauris, condimentum at nibh in, fermentum placerat ipsum. Mauris justo ligula, interdum at sem eget, vulputate pulvinar nisi. Duis orci diam, semper vel bibendum sit amet, scelerisque at justo. Nam ac est eget augue tristique maximus ac sollicitudin tellus. Duis viverra condimentum orci eu cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce mattis, risus a consectetur dignissim, urna purus scelerisque leo, et aliquet metus diam in sapien.',

'Maecenas quis pharetra metus. In at aliquet tortor. Praesent facilisis urna leo, sed hendrerit elit commodo eget. Donec nec finibus massa. Nullam pulvinar non felis nec euismod. Nullam faucibus sed nisi in pretium. Nulla in tellus eget ligula porta varius non eu nunc.',

'Sed vitae ex laoreet, dignissim turpis ac, dapibus nisi. Phasellus aliquam sed leo eu venenatis. Nullam et sapien orci. Quisque sollicitudin auctor magna, at commodo ante auctor non. Sed lectus risus, tristique non nisi nec, accumsan egestas neque. Morbi sagittis sapien est, eu convallis ipsum ornare at. Aliquam convallis nunc sed magna feugiat egestas.',

'Donec sed tellus ut orci porta fringilla. Pellentesque gravida gravida nunc bibendum gravida. Morbi turpis nisl, feugiat sit amet tellus eu, interdum luctus lectus. Nulla a pharetra ipsum. Mauris sodales felis sed ante hendrerit, vel placerat urna maximus. Suspendisse velit arcu, eleifend vel urna nec, fringilla finibus elit. Nullam nec augue nibh. Pellentesque condimentum, tellus sed tristique convallis, lorem augue laoreet lorem, sed imperdiet massa nisi non orci. Nam mattis ac eros quis mollis. Proin efficitur feugiat ipsum non sagittis.']

let string = '';

form.addEventListener('submit', submit => {
    submit.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.info');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.info');
    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

    let numberValue = Math.trunc(number.value);
    console.log(typeof(numberValue));

    if(string == ''){
        for(let i = 0; i < numberValue; i++){
            string+= randomText[i] + "<br /><br />";
        }
    
        text.innerHTML = string;
        string = '';
    }
}

const validateInputs = () => {
     let numberValue = Math.trunc(number.value);

    if(numberValue == '' && numberValue == 0) {
        setError(number, 'Enter atleast 1');
    } else if(numberValue > 10) {
        setError(number, 'Enter maximun 10');
    }
    else if(numberValue > 0 && numberValue < 11){
        setSuccess(number, 'Text Generated');
    }
};
