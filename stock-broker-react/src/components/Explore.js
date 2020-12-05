import React from 'react';
import './App.css';

class Explore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }
    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
                <title>Simple Stonks - Explore</title>
                <div id="owned-stocks" className="bordered">
                    <div id="stock-explorer" className="sorting-bar">
                        <ul className="Sorting-Tabs">
                            <li><a href>Name</a></li>
                            <li><a href>Open</a></li>
                            <li><a href>Price</a></li>
                            <li><a href>Mkt cap</a></li>
                            <li><a href>Daily +/-</a></li>
                        </ul>
                    </div>
                    <div id="highlights">
                        <p>this will be a spot where you can see all the stonks and sort them with the bar above! How
                            exciting :D</p>
                    </div>
                    <ul style={{padding: 0, margin: 0}}>
                        <li className="unstyled-list">
                            <ul className="portfolio-item">
                                <li className="stock-name">
                                    <a> TSM </a>
                                </li>
                                <li className="open-price">
                                    <a> $81.55 </a>
                                </li>
                                <li className="current-price">
                                    <a> $84.54 </a>
                                </li>
                                <li className="market-cap">
                                    <a> 404.30B </a>
                                </li>
                                <li className="daily-diff">
                                    <a> +3.74 (4.63%) </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* I copied these Gcards from google, similarly to how the website will behave (with better formatting) when it's finished */}
                <div id="explore-news" style={{textAlign: 'center', margin: 'auto'}}>
                    <h1> News </h1>
                    <div>
                        <g-card className="nChh6e DyOREb gO9czf" data-hveid={45}>
                            <div>
                                <div>
                                    <div />
                                    <div className="dbsr" data-ved="0ahUKEwjh5amGraPsAhUtT98KHaMwAskQxPQBCC8oATAA"><a style={{textDecoration: 'none', display: 'block'}} href="https://www.fool.com/investing/2020/10/07/why-tesla-stock-is-up-3-today-but-3d-systems-stock/" data-ved="0ahUKEwjh5amGraPsAhUtT98KHaMwAskQxfQBCDAwAA" ping="/url?sa=t&source=web&rct=j&url=https://www.fool.com/investing/2020/10/07/why-tesla-stock-is-up-3-today-but-3d-systems-stock/&ved=0ahUKEwjh5amGraPsAhUtT98KHaMwAskQxfQBCDAwAA">
                                        <div className="yr3B8d KWQBje">
                                            <div className="vC5xic">
                                                <div className="sYpfDb" style={{width: '112px', height: '112px'}}>
                                                    <div className="qV9w7d" style={{height: '112px', borderRadius: '8px'}}>
                                                        <div className="KNcnob" style={{height: '112px', width: '112px', backgroundColor: '#25911e'}}>
                                                            <g-img><img id="dimg_11" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHAAcAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQAGB//EADgQAAIBAgQEAwUGBQUAAAAAAAECAwARBBIhMQVBUWETcZEigaGxwRQjMkJy0QZS4fDxFSQzYoL/xAAZAQACAwEAAAAAAAAAAAAAAAACBAABAwX/xAAfEQACAwACAwEBAAAAAAAAAAAAAQIDEQQSEyExQSL/2gAMAwEAAhEDEQA/APmzQ5MKs2c3ZiMttt+dRErSAhELEC5IF7Ac6t4omEESKwKDXNzPp2prDH2sTMoFlFtuVj/T0plPDmNExQp9jaYkhwwsNLW60eTDALh1iOV30bM/PTttrSoxQOCEIQhg18wO/O1qajxKzYrDs2RFUW1bTTn8vSr7GEkDliaElJCLgkaHyqEuWHnWjhJL42d1ZcoUi4N9MwHyFDwSp9gnJF2a2pW5W1tuY3+FX3MmAMEgi8bL93fLe43tem8Sb8PgB2Fra+d/pUsq/wClKwuy57e/XX6e7ypV5JGjWNiciHQdKBzBw6XEST5fFbNlGVdtqEdzarBfOr5dTWcrC8BgEg3NSEuaKqaGjRx60vO7AJegK4N5GIjUkk7CufAyKDdW9K9f/C8apjPGIH3MTy+8KbVWfirZrYhIpxy8VAx9d/jXPlzJ9sSFHyJafM48ysGFwRreri7Ek6k86st+dXC31ANq7HY7bIUG1FQG17VIBso5UQLcgbVO5iwsM0sN/DcqGWzW6UaGeRcO8IUFG1JI1Fh191AVKYijOtuYtWcrAH6KKpvYeVFCG2o60zBh2cjmd63MNwCWbDLKzxJmJyCRspfypSzkxj9F5WxizzyRXPOnsJgRKXZyyxouZiPkO5NaUnB5oJFSSMqx2uN60MLw15MIkUaEu757dhoCTyGrUpPlr8NqbobrMR8AjQ+LAWC7MjG+XvfpQ0gIOotXqkXh+Dyqc07ah2V7L5DTUd6g4DAyzxeDOQJLFRKlr+8X+lLvktmVtymtihfhKeDw3HTncRLEB+ph9FNeexZux01vvXqsYkeE4W+HEsbSmbMURwxUKthcctzv0ryE7hiba+VDTremPFp7yWnnRELVcLsCBYU68BHKuWA75dL2vXWVunT3RYoC21u1XjT2hRzDZtQRoDREisfwn+/fUdpTi80EkYIpvDRX21qYoidhW7wfhvjszyHJBGA0shGiDl5k8h1pW2/EKXS6huD8PRY2xWK0w8dr9XP8o7/IVbGY6TFTfdrsMqog0VRsAOgFU4pxASlYcOvhwR+zGl9u/cnnS3ETJhsCAiOEEmSSUA5WcDUX2NjcW7XpPq5v2DRxfL/UvhqYLF4zD4iGGSJ2SS33cn4T39edV4j/ABAuSWDCqkURFroT7dj35b6V5R8Y4UrGzKpABAawNqWlxBP+a2XGTHFxa0vRqS45mYXbnRsLjTMDhmcZybxEnZunkdvO1YBmO/1qDNZjc8+tb+BL8GaaYx9YbDcRkixkjxyvEGLAWNiFJ2+VAwOSdcSsmKjhPhaZ7+0QQdLeXxoeJb7ZD9rW3iCyzDvyb38+/mKQimMUmbKDoRY35i31olWsG1xIxf8AJtz4b2trV0OFEsKRpG5maTTUW6bb31r0E/B8U+JkiTDuWRiGAW9vfRcHwc4fPJiJoYiqkDNJcgnTYXP+K50b3hwqbdzTEkURGRcPlIQAGVlDFze2l9h0romMhCzQLIDsQoVvcR9b1s5eF4aCZJJjNnIuUhAI/Szaj0quG4hw2DExp9hYKT+N2zv5gaCj8jl8NHzJt4kL4HhC4uYCBrblhJ7OQDmTtbv8Ke4l4ipHgMFDKYQw1Cm8rfzft0rPxPHPE4fifBmWGPxQFgWDJmHcjTvr0rEbiPhvBIJZbFgZLC1hcX2OvOijTKTTYMK/M25fhpSxPg8XLNiYmiWEkosgtmb8osd7aX7CsXEYt3wvhtJIfvS+Uscu3TrvSmIxjyyMzMxJJ3uTSskpyi4Pxp6FKR0ItRh1iEaQ0J3NBaTsao0ug9lqZUC0gpk+VQz+1elmk/VUGU6fi5UXQ1iaWDxpw8wewZSMrqdmU7g00cGZnD4QmSB9Q5IAj6hz+W39RWEZCRYE3HfvUNMRfU2NvfQusdrvSWM95LxvFyqFlxErgCwDMSK6XGsnDBqQZZSbf9VG/qT6GsaGOSaVY4lLuxsBU8VxSGVYojmjhXw1a2jW1J95JPvrmKhNiEeJCKbw6TFHqfSgNi2VsysQRz91JNNvQnk8/SmoUpGTqSHGxTeAY/y5g17c9f3pd5iQP2pYyaEd+lUZ9NBy10piNZFDA+cX9piOpy3+tDd/ZXy6c6A7am4seelVZxbz7VqohYEZx39KqbG3XyoWcC+i7W1FQz3G3PpRpBFmI/sVUnb9qHfr8q64NhpV4GXY5TvqKqToN6GxF6sELIWUAhd+1WEj083F5WV1iWKAPo3hAgsOl73t2rOknzHUj1pbxPP1qjSHv60pGCQUpt/QrSa8vWqtJttoLUHP5+tVZvP1rVRM2Ezjt8aguNuVCLefrXM2vPYc6NIEJJIGkdjpmYm1DZgQNqre4G/P81WysyMwuQoBOtFhMKk+VSi+KyRrlzMwUXvuaGT5+tM8MUSY2JXXMLkgZrahSRtY7250WEfoWf2SVNrg2O9VzC19PjTPElRMbIIhZDlZRnvYMobc686U5Hf1qBI7MO3rT/C4o51mRy2uUey1rXNuh5mlY4s66Zr5rX5eu1H4XOIZTmVmDr+VgDcG4PwqmHHNK599qqWqt9DXXBB1N9ABas1EEnNryqpYcrV1/Pc1S5N70eFFs1SxsTffpapliaNY3J/5BcDpUyx2w8cgLZmZgfdVkzQZansNFHJgMQ7XzAEaNpcKzdOorP1705h8QY8HOgS4INzfa4K/WrLhm+xQ30sL3J5UfBytBiYplVWMbhrEGx1oSuAVsLgEmx51Fzk0voKhT9huIm+LkACqEKxgC50VQo1PYUsNNyNR0rizEkksSdyTR5ImGHjcsCOgJvrmtfl+U1Cw2Gb/AGcgXa7af+b/AEpJXKuCuh8qJFK6I6qxAK9teXyJoHPnUIj/2Q==" className="rISBZc M4dUYb" height={112} width={112} alt="" data-iml={1602103616455} data-atf={1} /></g-img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hI5pFf">
                                                <div className="XTjFC WF4CUc">
                                                    <g-img className="QyR1Ze"><img id="dimg_13" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACMElEQVQ4ja2TT0hUYRTFz/ne9+afWiOhpRAKgZFJBINUFs2ToDYZQTDrVi7CokUFLWIegS2CaiEtgnZBmyGwJCiJerWISCUopZXgQkZrMEmbmTdv3vtuC+kP2U7P8v44h3svHIoINiK1IfffAQSZK+QsAMgVchZd/mGuq1goWADAAiwC/M1EBAQpWH/LWohAXJh1DKAAon+Z9492phvZcFkEvSIyzZX6XXFlFgB48+VuNDReAFQXxLxHzBqWwUyFAJnPQ01lMomlsPLU3mI7xjdQccLUUEzpT8fGp+eTaCo9h060oO4D8SSwuvwMcfsMimM+RQR9o903Uu2Jq7VSgCiQCAKjU8oOqzLzbv6+LcnGLlRW6lDKQiyh0NwGfJnLy9CB6xx43LN9KTSvoPFIjKQJDgEETGiMblITC3cQBTEDBQURA8EIaJWB8HQ7fhzVn0Ps20penDw1PQ4Ah0e7F1TcGhYfkHpkEEZrL4vFAb9yRc4fvAUAHJl6W6zt2kvvSceh7BI+OJ2dYWvptXwtZ+2gqTRr2aa1Xk/K5OJtRCpNhNUF1Fb3oOO7j5kWyol+e2zxZEZldf0hdgS9nuOF51pA76znU/FjbJvWKqFtxJM20q0axIRcOl6+t/xCieuE4XLbkYHU5ANdDSWb9JsXAcDzYPodsk/1XAu+hTNRYHaKX1GoFecgKJAg8m3RIADNhjfVoJzlJnSB/HdIl8rxHE2QBEjX03T/1xtyMzbYmH4CYXH0m/DhoucAAAAASUVORK5CYII=" className="rISBZc M4dUYb" height={16} width={16} alt="" data-iml={1602103616455} data-atf={1} /></g-img>
                                                    Motley Fool
                                                </div>
                                                <div className="JheGif nDgy9d" aria-level={2} role="heading" style={{WebkitLineClamp: 2}}>
                                                    Why Tesla Stock Is Up 3% Today, But 3D Systems Stock Jumped 16%
                                                </div>
                                                <div className="yJHHTd">
                                                    <div className="Y3v8qd">For the second day in a row, shares of 3D Systems (NYSE:DDD)
                                                        stock are on
                                                        fire (in a good way), rising 16% in 1:30 p.m. EDT trading.
                                                    </div>
                                                    <div className="wxp1Sb"><span className="YCV9ed isfR2"><span className="WG9SHc"><span>2 hours ago</span></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </g-card>
                    </div>
                    <div>
                        <g-card className="nChh6e DyOREb" data-hveid={53}>
                            <div>
                                <div>
                                    <div />
                                    <div className="dbsr" data-ved="0ahUKEwjh5amGraPsAhUtT98KHaMwAskQxPQBCDcoATAB"><a style={{textDecoration: 'none', display: 'block'}} href="https://ca.finance.yahoo.com/news/stock-market-news-live-october-7-2020-222054367.html" data-ved="0ahUKEwjh5amGraPsAhUtT98KHaMwAskQxfQBCDgwAQ" ping="/url?sa=t&source=web&rct=j&url=https://ca.finance.yahoo.com/news/stock-market-news-live-october-7-2020-222054367.html&ved=0ahUKEwjh5amGraPsAhUtT98KHaMwAskQxfQBCDgwAQ">
                                        <div className="yr3B8d KWQBje">
                                            <div className="vC5xic">
                                                <div className="sYpfDb" style={{width: '112px', height: '112px'}}>
                                                    <div className="qV9w7d" style={{height: '112px', borderRadius: '8px'}}>
                                                        <div className="KNcnob" style={{height: '112px', width: '112px', backgroundColor: '#10100e'}}>
                                                            <g-img><img id="dimg_15" src="data:image/jpeg;base64,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" className="rISBZc M4dUYb" height={112} width={112} alt="" data-iml={1602103616455} data-atf={1} /></g-img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hI5pFf">
                                                <div className="XTjFC WF4CUc">
                                                    <g-img className="QyR1Ze"><img id="dimg_17" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAaVBMVEVgAdL///9VANBXANBOAM6siebTu/L/+//WvfNsEdaNV96HVtvAreuph+WjfuN/SdnFrO3w5vuieuPJse61l+j47/1sANacc+FGAM3byPTezPWYbeCAOtqER9uPXd5uINbr3vmAQdrj0/erJ5jnAAAAcUlEQVQYlZWO2w6CMBBEezqtgCJyqwre+f+PVNKgwoOJk8zDbHZnjzH/yDo7z6skjRNptDJYa8ybfCsV+a6kcnEXjF6GWvG2ofU0RRKmzoxQsfeH41TvOuhPcH4/vMD1Fu4fggfBmS8qO+C1YJ7n33oCo3oDRFg7A60AAAAASUVORK5CYII=" className="rISBZc M4dUYb" height={16} width={16} alt="" data-iml={1602103616455} data-atf={1} /></g-img>
                                                    Yahoo Canada Finance
                                                </div>
                                                <div className="JheGif nDgy9d" aria-level={2} role="heading" style={{WebkitLineClamp: 2}}>
                                                    Stock market news live updates: Stock rise after Trumps signals support for
                                                    some virus relief
                                                </div>
                                                <div className="yJHHTd">
                                                    <div className="Y3v8qd">Stocks rose after a flurry of Twitter posts from President
                                                        Donald Trump,
                                                        who announced his support for specific virus relief measures, despite ...
                                                    </div>
                                                    <div className="wxp1Sb"><span className="YCV9ed isfR2"><span className="WG9SHc"><span>2 hours ago</span></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </g-card>
                    </div>
                </div>
                {/* end the copied Gcards */}
            </div>
        );
    }
}

export default Explore;