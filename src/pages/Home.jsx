import React from 'react'

import '../assets/home.css'

const Home = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md position-sticky pt-4">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAARlklEQVRogd2ae3jU1ZnHP+f85pqZyUwyuScQSOROIMhFUXStraClVdRFt9qKqMuKio+0uNtnn31203322adPa7FdqF26VtBeVy2Ll9ZCVayKyP0SCIRASEhIyG1ymcx9fufsHxMmjIGAl2f/2Pev+Z1z3ve833N5b2fg/wmJL1rghhUbrAMOY5I0jbFC6EKFtAIIQVRBjxb6RDi3+XRNTU3yi5z3cwPRaPHsqpfmam3eLqVcqDXVWmvraDxSigSwUyn9thb692vWPVT3efX4zEA2rNiQFbTZHpZSPKGVngiQV5hN8bhcCkt9uH1OPF4nNrsFgGg0QXggSn8gxNmmAC0nuwkPRlPADHlEKfWsleCvn1z3ZOz/BEhNTY3F3V2+0pDyX5RS/pw8NzPmj2dCVQnZOVmfSlZPxwAnDrVxaGcj4cEY0hAdSunvBv3NL9XU1KhPI+tTAXn2sY3V2iI2aqWrC0t9zF84mYopxZ+QotHaRCuTjrP9NNV3IgSMm1BAQZkXISwIaWTINZMm9Yfa2LO9np6OIFKySwi17KmfPFz/hQP50apNDwjBf9lsFtv8hVOYtaACIYbYtUapOErF0WYS0OzY2siBHa1orVMTCcHVC8q4bmEFCIEQFqRhR0pbWgtlKva9f5KPth1DK51QWj/6nXXLX/hCgNTU1EhPd/mPgVUl5X4Wf2suHq9zqFdjJiIoFYMhhQHqD3Ww7dXjRCptDMxwAJB9MILzdIJFS6cwcUbBBRoIpLRjWJ1pdQIdQd767V46zvYh4Pur1z/4jwIxPMFFSF4OhLu7/AVg1bQ5Y7ln5YI0CGXGSET7UGY0AwTA4V1tKI8kcJ2TpEeS9EgCC7IwPQaHPj6bOYnWKDOaISu30MM9K29g3KR8NHz3R09sek6jR110y2idQzuxbNaCSr50+wwQoJWmbt8p2pp6sNoMrpqWT2GZJ4NvMBgj7jVAXDC3ECS8ksHgSKPU0Rqk4UgnyYSipNzLxBnFCKFZ/I0pvPOawfED5x5du2pTP+v47qV0NS7VsfaJjY8C/zp1zlhuuWsWCEjEErz68w84sKOZrvYQ7c391O0/BwJKx/nSvC0nexlsDxOeYEdbUmBkVOHbH6O0NJtJMwvTY3dvb+bPvz9O+5kButuCnDzaTdvpAJXT87BYJJWT8+g+F6K3K7xg0TVLmrftfu3gFQN59rGN1UixuaTcb9y+7BqEFKAV771+gIajnZTePIfy228gf9ZEon1BGvedoXScj+yc1H3Iycuibs85nK0JlCGwBUxyP45gRDSLlk7F5bGlAJ/q450t9ZQbitucCaptJk4BxwJxknFF+YRcEDBukp/Tx7t1JJy89da5S7Zs3bOl65M6j7gjNTU1Fm0RG20Ow7r4W3ORhgQNiViQo/vO4a0sw189ESElhtPB2FvnIy0W6vadS8soKPXwtfum4UoY5HwUxvdRGHdSsvi+aRSUuNPj6va3YwFucCRxiNSqTrGajDEUdXvbYejq2WwGX7tvurDapE0YeuPLS18esQEj7oi7u3ylRlffuLgqfbHNxCDJZIJkPIkt250xXlqtWJx2ouFERvu4SX4eWnMNXe2DICC/yI1hyVy3WCSJU45UwiM1LXGTZFJhsaZ4vH4n824qlzu2Ns5tKRp8BNhwyR3ZsGJDlmGIfy4s9VE1bxyQsk5KxbFYJDn5WQw0nkUnhuO9cFs38WCIguJMgACGRVI0JpuisuwRIADyi1wEFXSpYaOQBFpMg9z8rDSI8zTz2lK8OQ4lkDVrV7/svLAvY+Sg3f6IMnXe/IWTh0y6xkyE0/033FZJrD/Iyd9so3vfcc59eIjTm9/F5bZTvWDMCEUvR7NuGIPLZWNb1Mr+mMGRuOTNiJWgggW3VV50Ya5fVCm11kUkQssy+s7/0Gjx8bWHXsrxu/03L5kJAsxkFK2Gj4zP7ySv0E1zXQeBhlZCZ7soHuNh8X3TcGfbR0zc1BCgdncbLSd76ekMI6XIGGexGoyfnEdH2yAne+O0mRLDZWfh3ZMZP9l/UfC5+VnUH+pQsahZsXX3lufOt6f3dO2qF+dprXb91dermH3jVaA1iXjfCGcHKV/SH4hgtRu4PMOKDfbHaDzew4x5JSDgD789SmNddwavv8DF/EUVjJ+Ym9EeCsZIxEy8uc6UlRyF9n/Ywo6tjUjFrNXPLT8IF9wzpfTXhYAJVSVD3/GLggAQUuDLGxnptjX385c3G7DZDSZXF7L4G9NAg9KagUCExuM9HNx5ljd/Wct9T8zBX+hK87o8dvCMEHlRumpaPju2NmIa+k4gE4hhsCg3PzsdiisVJxE3aarvYXAgTm5BFuVX5Y4anV01LZ/d7zVTu7uNydVDTk+AFCngVy/IouqaEppPBC66EFdK2TkOfLlOsy8QueZ8mwVS6WlIU1087vx2a8419/LWfx8h2DccUpSN97LonmlkuYcTwNBgnN3vNjH16mIKyzzc8UAVsah5SSWs1lRYY5qa1148zOwbx1I23nfJ8Zciu8tiiABpRgkw4DAmaa2thaWp9mgkyh9/dwRlJvjqnS6+ucLDDTc7aW/uZ/vrmSlCImrSUNvFKz8/wPGDHXh8DvKKXFyOpISezjA7/nTqU4MwTU2gM6w0NGUAEco6BsDjS5nmEwfPMtgf48u3OqmYaMGXI5k518bMuXYaj/XQH4imhfrynHzrqXnMur4sHaJcCQkhmH3DGLo7QkQjicszXECHdraSiJkSxCvn2ywpNGaRRuAe8uTBgQgA+UWZkUDB0HewP4o3d1hpp8vK9YsqPpUyADOuKaFyah4O56i1ijQlk4pDH7Wy8+0mLeAvq9cv2/wdHhwGogU2NGnvm5ObuoitzUkmTBmepKUpCQJy/CnAfd1h3tlygmTCZOrsYqrmlXwqIEKk/Eo8bnJ0bzvnWgYY7I+hzJHpulLovp6wTiaUFILt8Xj8rguTLQuA0MLQkLbfE6qK2PPeKbZvDRMa1PjzJadPJjh6OM70OcW4LuL8Piudax3g9ZdqVSySlFLQo/Twuf8E6ojW+pRAbF69btkbn8wYU+ZX6xBCkIinrI1hNVh8/3S2vVLHh+8G04OnXF2UETr48rK4+5Hqzwwi2Bflf144rEzTbFfoB76z7qF3r4Tv/HG6CBDRgYDQQBRKvCAk3lwHf71iFp1nBwkNxMgtcOHLc44QABAJJTi4o4XxU/IoGpN9xUB2bGskmTBNtLz56Z8uO3HFjBehFBAhWkAzEAilPodCMCHEUBp7aZfb1x3h5Q37icdMcgpcVwwkmVQ0HutWGvGrNZ8TBAwBGchvqvcGyhOdbf2pOq2UpFz4qIULAKwOg4opeVTNK6GwzMNgf4xYLIm/YHRfEh6IYSa1BA5d2P6DVZsqDSHGaoXDUKodG02rf7y873J6pAOOZ5/ctDs33zP3gTVfBiCZGESb8fTARMLkZG0XA71RsnMdTJiej8WaaZ6VqfnNT/did1hYumLWqBNHQgme//5HaC3+zbDqX+gkTyG4T2vyMxUUJugPtBAbg/6mX12qApmOtUyt3uruGJg70BsmOycLKa2YQ0B6OkP84ddH6Q9E0ox73jvD4vunZaz8yaNd9HaFueXuyaOCgJTv8Re6VKAzvFKb/D0I65hxFsaOt+DLEUgpCIc1He2m0dgQvzEU1Dd5A2OfXvvExvu+vX557SflpZf01nm3D4JY4fFlUVKei5AGyoxhJhVbNh4mNBBlaoWVq8ba8LolHZ0JWk71MXVOMXLIbNsdFjw+O9PnlFy29KeVpvFYt+gPRLPKyi3G15e6RPVcmygqNfDmGNgdUFxqYVylhZmzbcLlkZxtTeYpkwdvmXfXgW27t5y8UF46Q1y9/qF90qD+8MeNQ1cjVQFsPd1HoCtMZZlBXo6BzQp5OZLxZQY9nSFaG3vTwtxeO9Xzy66oELv9jQZaTvUxe76DO+51keMfTlZr98d56T8HSQ5l1FIKplfb+JtlHunNkQ4p1O+ffWxjht1PcwuE1ib/0dsVovF4qiJiWB2EB1PHK8uZmT+7h77P91+K+noi7Hn/DNtfb2DP+2fo7QrTVN/D0b3tTK+2Mf9Ge7qOZ5qaIwfinKhLkEhodr4f4VzbcCSd7ZPccY9L2uzCjiFe3bBiQzrsyChgmA7jRUtCfW/HW0fzxk8uRAiJvzAVEQf6FNmuYTDdfakJcvMvbZ32f9jCzm1NWmklECKJ1pZdf27SVrsU7mzJgi8P+yXT1Gz+dYiOdhOrVeBwCGr3JTi8N86XbnMytSpVC/N4JTctdMqtr4crQ3br3wHr4RPFh6efeSCklPqnrvYBanc1A1A81s/4KX6a25M0NCfoCpicPJPgTHuSiqn+EeXS83SytosdWxtRWn8gYMa31y2zSVNXgvpTPGYy9zo7lguW8djhBB3tJjff5uThJ7O5+5tuHn7SQ1GpwYdvR1Fq2BVMmGwlN89QIFaebxtRown6z/xCSnHw/Tdq6Q+EAcUtd01mQlUBZztNjp5K0NphMrGqgK/ceWnrtPPd00oKzjhUaPG31y+vFQi9+mcPNWpNgxRCV07KjHh7uhVSwpQqG0cOxPjdC0EMQ1B1tY14XBMOXeDTBEyYbJVaM/XZlS9UwEUKdDU1NclnVr1wP0kO/vE3u613Lp+J3WFh0dIpXL+wgt6eCDl+J27vpQPHaCRBX3dEaq1fefy5xwczOqW82ueX2uEQGSbBny9RCuoOx4nHwFSp4zZhkg3/wwZuT+aaF5emDK6STAUaL/qssGbdQ3WmqR5rb+7l7c11aQfv9toZU+EbFQSAHnJZQsgRlkBAocstRsw7pcpKYbHB9j9F2PNRKnF75cVBPv4whtc3skSd5UmtgxayBEZ5H1nz04eeB/HMicOdbH+jIf3ydCXkzLLi9tqVENxxoWUZosjFRBmG4K77Xdy0yMn0ahvTq224vZJ9O6P8ZWtkxHgzmQIiBNFRgQAE85r+QaB/fmRPG29vrsdMXuH7pIA5N46VWuupgzbbL9eufj4X4IdrXnJprcxgvxohqKPd5ERdgunVqZTalytZcq+L6dU2jh+NE49nog/2p0RIVNtlgdTU1KjV65c/qrX+0fGDHbz6/EE12H9lr8dVc0uYeW0pwL06aXStfXLTKSOmukDM6u9Xsr83s9LScCzBe1ujJJPQUJfgw3ejxOMab45Ea4hHM4GcaUqknmxiiT0wykPPefoe32Pbnte2LbrmztOhYPyrR/e1S7vDIgpK3MOPoRcjAeUTcymryMEwhHA4LTkl47zWabOLaW4IICWMHT986oSAY7VxegOKWBR6uk3c2ZK9H8fI9kpmzx+uEcTjmnfeCitl8u7TP3vk+SsCcp627d5y6Na5S7YopWY31QfKGo91K7fHJnLyskYNSbJ9DsZP8jO5upCKKXkUlnnobA1y6niIqyZZcAxFCF5fKnU4eihOT1dqt5pPJclySW69I4usC5zxrg9itDabQsEjf979WtOnAgKwdc+WrvlfnbXRHvGdjYYSc+pruzwnajtVMm6KbJ8Dm2PUJ8k0FZZlU7unnbMtJhOnWjGM1EqUjrUwbaaNaETT3alYcq+L677kyDC9pxsSfPB2TAvYvGb98h+cb//Mf+GoqXnZ5u4OPygFj2qtZwF4c51qTKVP5ha48PmdOF02bHYDtCYWNYlEEvR1henpDNF4rEdHwwmRX2Sor92dJV3uYWVbmpLs3xXj9qUuLjTUx2rjbN8aVVpTb9GWa59c982Bzw3kQlr7+KZpWrBEoL+CYL7WjOpohBARNAc1eq8QeoXFKq1zr7PLqTNtOByfUEnDuXaT3Tti+kxjQgj0rqQSS/7+ueXnMmR+EUAupJeXvmw0FYXHGUpP0lLkCJQbQCjRr4TslyrRMFDQ2ng+0/vhyhdnGBb9nNb6eimELiw18PqEsFgEoUFF5zlThQa1FIKIQv/QxuC/X+yPN184kM9Kzzy+6UaBultKbkbIUqVxCXSH1tQJod+U0nzlqZ/8bcel+P8XjfZ21y9JH5IAAAAASUVORK5CYII=" alt="logo" />
                        </a>
                        <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarList" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className=" collapse navbar-collapse justify-content-end" id="navbarList">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-3 font-nav">
                                    <a className="text-decoration-none text-secondary" href="/">Home</a>
                                </li>
                                <li className="nav-item mx-3 font-nav">
                                    <a className="text-decoration-none text-secondary" href="/albums">Albums</a>
                                </li>
                                <li className="nav-item mx-3 font-nav">
                                    <a className="text-decoration-none text-secondary" href="/about">About</a>
                                </li>
                                <li className="nav-item mx-3 font-nav">
                                    <a className="text-decoration-none text-secondary" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="text-center my-5">
                    <div className="fs-1">Art & Soul</div>
                    <div className="fs-3">Art reminds that you have a soul</div>
                </div>
            </header>
            <main>
                <section className="">
                    <ul class="nav justify-content-center mt-5">
                        <li class="nav-item">
                            <span class="text-secondary mx-5 cursor-pointer active">All</span>
                        </li>
                        <li class="nav-item">
                            <span class="text-secondary mx-5 cursor-pointer">Pencil</span>
                        </li>
                        <li class="nav-item">
                            <span class="text-secondary mx-5 cursor-pointer" href="#">Water Color</span>
                        </li>
                        <li class="nav-item">
                            <span class="text-secondary mx-5 cursor-pointer" href="#">Portrait</span>
                        </li>
                        <li class="nav-item">
                            <span class="text-secondary mx-5 cursor-pointer" href="#">Mural</span>
                        </li>
                    </ul>
                </section>
                <section className="row mt-5">
                    <div className="col-12 col-md-3">
                        <img className="art-image" src="https://source.unsplash.com/3Sf_G9m0gcQ/400x300" alt="art" />
                    </div>
                    <div className="col-12 col-md-3">
                        <img className="art-image" src="https://source.unsplash.com/5MTf9XyVVgM/400x300" alt="art" />
                    </div>
                    <div className="col-12 col-md-3">
                        <img className="art-image" src="https://source.unsplash.com/rlbG0p_nQOU/400x300" alt="art" />
                    </div>
                    <div className="col-12 col-md-3">
                        <img className="art-image" src="https://source.unsplash.com/zkNT5mikUuo/400x300" alt="art" />
                    </div>
                    <div className="col-12 col-md-3">
                        <img className="art-image" src="https://source.unsplash.com/fT49QnFucQ8/400x300" alt="art" />
                    </div>
                    <div className="col-12 col-md-3">
                        <img className="art-image" src="https://source.unsplash.com/O6fs4ablxw8/400x300" alt="art" />
                    </div>
                    <div className="col-12 col-md-3">
                        <img className="art-image" src="https://source.unsplash.com/3MAmj1ZKSZA/400x300" alt="art" />
                    </div>
                    <div className="col-12 col-md-3">
                        <img className="art-image" src="https://source.unsplash.com/SvGY5Afzmxo/400x300" alt="art" />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home
