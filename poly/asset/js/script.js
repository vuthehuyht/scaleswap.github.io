$('#checksidebar').click(function () {
    $('#sidebar').addClass('on')
    $('#overlay').toggle()
});
$('#overlay').click(function () {
    $('#sidebar').removeClass('on')
    $('#overlay').toggle()
    $('.v-speed-dial__list').removeClass('on')
    $('#icon').removeClass('iconOn')
})

var text1 = ['What is Polygonum Online', 'Staking POG', 'PVP zone']
var text2 = ['PVE zone', 'FARM zone', 'Polygonum Online: activity zones']
const loadMore = () => {


    var html = ``
    text2.forEach(text => {
        html += `
        <div class="col-sm-12 col-lg-4 col-12">
            <a href="#" target="_blank" class="text-decoration-none">
                <div class="rounded-0 v-card v-sheet theme--dark transparent" style="cursor: pointer;">
                    <div class="v-image v-responsive rounded-0 theme--dark">
                        <div class="v-image__image v-image__image--preload v-image__image--cover" style="background-position: center center;"></div>
                        <div class="v-responsive__content"><!----></div>
                    </div>
                        
                    <div class="v-card__text">
                        <div class="v-card__title white--text">${text}</div>
                    </div>
                </div>
            </a>
        </div>
        `
    });

    $('#text').append(html)
    $('#btnLoad').empty()
    var btn = `<button type="button" onclick="clo()" class="v-btn v-btn--text theme--dark v-size--default"><span class="v-btn__content">❌ Close</span></button>`
    $('#btnLoad').append(btn)
}

const clo = () => {
    console.log('ok');
    var html = ``
    text1.forEach(text => {
        html += `
        <div class="col-sm-12 col-lg-4 col-12">
            <a href="#" target="_blank" class="text-decoration-none">
                <div class="rounded-0 v-card v-sheet theme--dark transparent" style="cursor: pointer;">
                    <div class="v-image v-responsive rounded-0 theme--dark">
                        <div class="v-image__image v-image__image--preload v-image__image--cover" style="background-position: center center;"></div>
                        <div class="v-responsive__content"><!----></div>
                    </div>
                        
                    <div class="v-card__text">
                        <div class="v-card__title white--text">${text}</div>
                    </div>
                </div>
            </a>
        </div>
        `
    });

    $('#text').empty()
    $('#text').append(html)
    $('#btnLoad').empty()
    var btn = `<button type="button" onclick="loadMore()" class="v-btn v-btn--text theme--dark v-size--default"><span class="v-btn__content">👇 Load more</span></button>`
    $('#btnLoad').append(btn)
}

$('#btnIcon').click(function () {

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if ($('.v-speed-dial__list').hasClass('on')) {
            $('.v-speed-dial__list').removeClass('on')
            $('#icon').removeClass('iconOn')
            return
        }
        $('.v-speed-dial__list').addClass('on')
        $('#icon').addClass('iconOn')
        $('#overlay').toggle()
        return
    }

    if ($('.v-speed-dial__list').hasClass('off')) {
        $('.v-speed-dial__list').removeClass('off')
        $('#icon').removeClass('iconOff')
        return
    }
    $('.v-speed-dial__list').addClass('off')
    $('#icon').addClass('iconOff')
    $(this).mouseleave(function(){
        $('.v-speed-dial__list').removeClass('off')
        $('#icon').removeClass('iconOff')
    })
    
    

})

