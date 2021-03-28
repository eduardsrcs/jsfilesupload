# File uploads

[Загрузка файлов на CSS  и JS с нуля.](https://www.youtube.com/watch?v=5vx2PVClSVU)

[Source repo](https://github.com/vladilenm/upload-images)

## Some problems...

### About FileReader
[FileReader onload not firing on stackoverflow](https://stackoverflow.com/questions/18542907/javascript-filereader-onload-not-firing). You can't grab a local file like that for security reasons. Another underlying problem is that readAsText (and all the read functions) need the file's content and not its file path/name. You can grab this from the files collection of the input type="file" element...

## Get started
time 4:00. Here we install **parcel-bundler**, just simple webpack analoque. 

```sh
npm init -y
npm install -D parcel-bundler
touch index.html
touch app.js
touch upload.js
touch theme.css
```

`upload.js` file will contain plugin which we will import in `app.js`. Note, that we needed to use eruda console for modile browsers. that means we cannot use console before it is initialized in our app.

Stopped at 11:50

Create buttons and styles for them.

## Start working with plugin

Time 13:40

Create input tag with type "file".Then create button in js and add eventListener to it and this click event will trigger input click method.

Then, make changeHandler method that triggers input change event, on which we input file. At this point we can grab nly one fle, but we will fix this further But now, we will give second parameter to upload function. Don't forget to add accept atribute to options, so, we can select file types accepted by our input field.

Ok, now we can continue on changeHandler method.

### Creating preview
Time: [30:40](https://www.youtube.com/watch?v=5vx2PVClSVU&t=1840s)

In **changeHandler** continue with reader.
But there something not working at this point, respectively reader functions. We go forward, because Minin's code works...

### Styling images

===
Stopped at  [43:40](https://www.youtube.com/watch?v=5vx2PVClSVU&t=2620s)
