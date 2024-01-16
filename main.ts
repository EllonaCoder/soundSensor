input.onSound(DetectedSound.Loud, function () {
    led.plot(randint(0, 4), randint(0, 4))
    clapcount += 1
    music.ringTone(randint(131, 988))
    basic.pause(1000)
    music.stopAllSounds()
})
let clapcount = 0
basic.forever(function () {
	
})
