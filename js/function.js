$(function () {
	const $container = $('.slides > .slides-box > .slides-container')
	const $indicator = $('.slides > .slides-pagination > li > a')
	const $btnPrev = $('.slides > .slides-navigation.slides-prev')
	const $btnNext = $('.slides > .slides-navigation.slides-next')

	let nowIdx = 0

	$indicator.on('click', function (evt) {
		evt.preventDefault()

		nowIdx = $indicator.index(this)

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')

		$container.stop().animate({ left: -478 * nowIdx })
	})

	$btnNext.on('click', function (evt) {
		evt.preventDefault()

		if (nowIdx < 5) {
			nowIdx++
		} else {
			nowIdx = 0
		}

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$container.stop().animate({ left: -478 * nowIdx })
	})

	$btnPrev.on('click', function (evt) {
		evt.preventDefault()

		if (nowIdx > 0) {
			nowIdx--
		} else {
			nowIdx = 5
		}

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$container.stop().animate({ left: -478 * nowIdx })
	})

	setInterval(function () {
		if (nowIdx < 5) {
			nowIdx++
		} else {
			nowIdx = 0
		}

		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
		$container.stop().animate({ left: -478 * nowIdx })
	}, 2500)
})
