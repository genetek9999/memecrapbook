import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { MemeImg, MemeImg2, MemeImg3, MemeImg4, MemeImg5 } from "@/assets/images";

const inter = Inter({ subsets: ["latin"] });

const data = ["/gifs/meme.gif", "/gifs/meme2.gif", "/gifs/meme3.gif", "/gifs/meme4.gif"];
const data2 = ["/gifs/meme5.gif", "/gifs/meme6.gif", "/gifs/meme7.gif", "/gifs/meme8.gif"];
const data3 = [MemeImg2, MemeImg3, MemeImg4];

export default function Home() {
    return (
        <>
            <Head>
                <title>memecrapbook</title>
                <meta name="description" content="Change web3 culture by combining memes, decentralized storage solutions, and degen shitcoin trade and gambling." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 10 }}>Meme Crap Book</h2>
                <p style={{ fontSize: 14 }}>
                    Introducing the <b>MEME CRAP BOOK</b>, a project that will change web3 culture by combining <b>memes, decentralized storage solutions, and degen shitcoin trade and gambling</b>. This effort aims to capture the ever-changing meme culture in a digital compendium called the MEME CRAP BOOK, ensuring that each item is immortalized on the blockchain. The $MEMECRAP memecoin on SOLANA,
                    along with IPFS as the primary store for the MEME CRAP BOOK and potential expansions to Bitcoin inscriptions, intends to promote decentralized social media and make memes unstoppable.
                </p>
                <h3 style={{ marginTop: 36, fontSize: 21, fontWeight: 700 }}>
                    Memecoin on the most Degen chain + This digital book is linked with metadata to the token and the Book has even more!!
                    <br /> MEME CRAP BOOK is next 1000x project.
                </h3>

                <div className={styles.images}>
                    {data.map((gif, index) => (
                        <div key={index}>
                            <Image src={gif} alt="" width={400} height={560} />
                        </div>
                    ))}
                </div>

                <p style={{ fontSize: 14, fontStyle: "italic", marginTop: 21 }}>All unminted and unpublished memes will be archived in Meme Crap Book.</p>

                <div style={{ marginTop: 60 }}>
                    <h2 style={{ fontSize: 28, fontWeight: 700 }}>Meme Crap Book – a collection of all archived memes.</h2>

                    <div className={styles.images}>
                        {data2.map((gif, index) => (
                            <div key={index}>
                                <Image src={gif} alt="" width={400} height={560} />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: 100 }}>
                    <p style={{ fontSize: 27, fontWeight: 700 }}>
                        Total Supply: 69000000420{" "}
                        <Link href="" style={{ color: "#0000ee", textDecoration: "underline" }}>
                            $MEMECRAP
                        </Link>
                    </p>

                    <div style={{ marginTop: 22, marginBottom: 35, fontSize: 15, fontWeight: 700 }}>
                        <p>Community Fund (20%) - unlock in 3 months</p>
                        <p>Liquidity Pools (30%)</p>
                        <p>Presale (50%)</p>
                        <p>Token Data is all accessible.</p>
                    </div>

                    <Image src={MemeImg} alt="" width={400} height={560} />
                </div>

                <div style={{ marginTop: 100 }}>
                    <p style={{ fontSize: 29, fontWeight: 700 }}>Roadmap</p>
                    <div style={{ fontSize: 21, fontWeight: 700 }}>
                        <p>Phase 1: Meme</p>
                        <p>Phase 2: Vibe and HODL</p>
                        <p>Phase 3: Meme Takeover</p>
                    </div>

                    <p style={{ fontSize: 14, marginTop: 38 }}>*disclaimer I used DEX a lot and lost a lot, but still have no idea what am I doin*</p>

                    <div className={styles.images}>
                        {data3.map((img, index) => (
                            <div key={index}>
                                <Image src={img} alt="" width={400} height={560} />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: 100 }}>
                    <h2 style={{ fontSize: 21, fontWeight: 700 }}>How to buy $MEMECRAP</h2>
                    <div style={{ fontSize: 14, marginTop: 21 }}>
                        <p>Send $SOL to your personal wallet to buy $MEMECRAP.</p>
                        <p>Head to Raydium and paste $MEMECRAP address and swap SOL for MEMECRAP.</p>
                        <p>Hodl and enjoy the memetastic.</p>
                    </div>
                </div>

                <div style={{ marginTop: 100 }}>
                    <p style={{ fontSize: 14 }}>Telegram: @MemeCrapBook_Official_Chat</p>
                    <p style={{ fontSize: 14, marginBottom: 20 }}>Twitter: @MemeCrapBook</p>

                    <Image src={MemeImg5} alt="" width={800} height={600} />
                </div>
            </main>
        </>
    );
}
