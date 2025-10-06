import { useState } from 'react'
import QRCode from 'qrcode';

function App() {
  const [url, setUrl] = useState('');
  const [qrcodeSvg, setQrcodeSvg] = useState('');

  const GenerateQRCodeSvg = () => {
    QRCode.toString(url, { type: 'svg' }, (err, svg) => {
      if (err) return console.log(err);
      setQrcodeSvg(svg);
    })
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <label htmlFor='text'>URL or Text:</label>
      <input
        name='text'
        type='text'
        placeholder='e.g. https://example.com'
        value={url}
        onChange={(e) => setUrl(e.target.value)} />
      <button onClick={GenerateQRCodeSvg}>Generate</button>
      {qrcodeSvg && (
        <div className='svg-container' dangerouslySetInnerHTML={{__html: qrcodeSvg }} />
      )}
      {qrcodeSvg && (
        <a 
          href={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(qrcodeSvg)}`}
          download="qrcode.svg">
            Download
        </a>
      )}
    </div>
  )
}

export default App
