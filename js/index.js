var counter = document.querySelector(".Counter");


document.querySelector('.MyText').oninput = () => {
    if(document.querySelector('.MyText').value == '')
            {
                counter.style.display = 'none';
            }
            else
            {
                counter.style.display = 'block';
                let data = document.querySelector('.MyText').value;
                let words = data.split(" ").length;
                var Letters = 0;
                for (var position = 0; position < data.length; position++) 
                    {
                        Letters += 1;        
                    }
                
                counter.innerHTML = `Words : <span>${words}</span> , Letters : <span>${Letters}<span>`;
            }
}

function ConvertCapital()
    {
        if(document.querySelector('.MyText').value == '')
            {
                tata.error("Error!", "Empty Field, Write Something");
            }
        else
            {
                let data = document.querySelector('.MyText').value;
                data = data.toUpperCase();
                document.querySelector('.MyText').value = data;
                tata.success("Converted!", "Data Converted into Upper Case");
            }
        
    }

function ConvertSmall()
    {
        if(document.querySelector('.MyText').value == '')
            {
                tata.error("Error!", "Empty Field, Write Something");
            }
        else
            {
                let data = document.querySelector('.MyText').value;
                data = data.toLowerCase();
                document.querySelector('.MyText').value = data;
                tata.success("Converted!", "Data Converted into Lower Case");
            }
    }

function CopyText()
    {
        if(document.querySelector('.MyText').value == '')
            {
                tata.error("Error!", "Empty Field Can't be copied");
            }
        else
            {
                let data = document.querySelector('.MyText');
                data.select();
                data.setSelectionRange(0, 99999); /* For mobile devices */
                navigator.clipboard.writeText(data.value);
                tata.info("Successfully!", "Data Copied Successfully");
            }
        
    }

function ClearTextBox()
    {
        if(document.querySelector('.MyText').value == '')
            {
                tata.error("Error!", "Field is already Empty");
            }
        else
            {
                document.querySelector('.MyText').value = '';
                counter.style.display = 'none';
                tata.info("Cleared!", "Textbox cleared Successfully");
            }
        
    }

