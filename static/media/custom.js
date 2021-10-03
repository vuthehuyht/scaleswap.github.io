let indexSlide = 0;
let titles = [
    'Integrating Reward Staking With Gameplay',
    'NFTs As Tethered Staking Avatars',
    'Inter-Planetary Sandbox Metaverse',
    'Cross Chain Compatible'
]
let contentSlides = [
    'Revolve Games is revolutionizing the way DeFi staking is integrated with blockchain gaming. The staking rewards of a given tethered actionable NFT are dependant on the in-game performance of that asset; be it a character, vehicle or game builder. As such, players are highly incentivized to participate in gaming and level up their NFT. Liquidity stakers are also incentivized to perform better against their opponents with increased staking multipliers.',
    'In the Revolve ecosystem, actionable NFT assets are tethered to a stake of RPG (the native token). An actionable NFT cannot be used in the platform without holding the NFTs respective stake, the two are tethered exclusively. While the NFT is always tethered to it’s stake, the NFT can be transferred or sold to another wallet through a staking contract transfer. The NFT acts as a certificate, stating that whoever returns the NFT back to the staking contract will be able to withdraw the staked amount.',
    'The Revolve Games sandbox metaverse is an inter-planetary metaverse where users can buy land on planets, build games with game builder asset packs, rent land, monetize their spaces and more. Explore the galaxy in your RPG tethered spacecraft NFT asset, teleport to your favourite points in the metaverse instantly with your teleportation portal network. Revolve game themes NFT SDK (software development kit) will allow third parties to develop and monetize custom game builder asset packs.',
    'RPG tokens in the ecosystem are cross-chain compatible and can be atomic swapped between the BSC, Polygon and Ethereum networks.'
]

$('.slide-left-btn').on('click', function() {
    if (indexSlide === 0) {
        handle(indexSlide)
        indexSlide = 3;
    } else {
        handle(indexSlide)
        indexSlide--;
    }
})

$('.slide-right-btn').on('click', function() {
    if (indexSlide === 3) {
        handle(indexSlide)
        indexSlide = 0;
    } else {
        handle(indexSlide)
        indexSlide++;
    }
})

function handle(indexSlide) {
    $('.Slider_sliderHeader__ErYzX').text(titles[indexSlide])
    $('.Slider_sliderText__1eNjJ').text(contentSlides[indexSlide])
    $('.Slider_sliderPositionItem__33G7s').css('background-image', "url('./static/media/sliderInactive.b52e7fa3.svg')")
    document.getElementById('slide-pos-' + indexSlide).style.backgroundImage = 'url("./static/media/sliderActive.36cde131.svg")';
}