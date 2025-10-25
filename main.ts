sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
effects.starField.startScreenEffect()
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . b b b b b . . . 
        . . . . . . b b d d d d b b . . 
        . . . . . b d d d d d d d c . . 
        . . . . c d d d d d d d d c . . 
        . . . c b d d d d d d d b c c . 
        . . . c b b d d d d b c c c c . 
        . . c c d b b b c c c c c c c . 
        . . c c c d d d d c c d d d c c 
        . c d b c c b b c c d d d d d c 
        . c b d d b b b c c d d d d d c 
        . c c b b b b c b c b d d d b c 
        c b b c c c c c b b b b b c c c 
        c c b b c c c c c d d d d d b c 
        c c c c c c b b b b b c c c c c 
        c c c c c c c b b b b b c c c c 
        c c c c c c c c b b b b b c c c 
        `, 0, 50)
    projectile.setPosition(randint(0, 160), 0)
})
