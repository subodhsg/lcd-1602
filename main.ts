// Sample program on how to configure & use I2C LCD 16x02
basic.showIcon(IconNames.Diamond)
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("Press A for Temp", 0, 0)
I2C_LCD1602.ShowString("Press B for Sound", 0, 1)
basic.pause(100)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            # . . . #
            `)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("The temperature is", 0, 0)
        I2C_LCD1602.ShowNumber(input.temperature(), 0, 1)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # # # # .
            # . . # .
            # # # . .
            `)
        I2C_LCD1602.clear()
        I2C_LCD1602.ShowString("The Sound is", 0, 0)
        I2C_LCD1602.ShowNumber(input.soundLevel(), 0, 1)
    }
})
