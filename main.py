I2C_LCD1602.lcd_init(39)
I2C_LCD1602.on()
I2C_LCD1602.backlight_on()
I2C_LCD1602.clear()

def on_forever():
    I2C_LCD1602.show_string("Hello", 0, 0)
    I2C_LCD1602.backlight_off()
    basic.pause(5000)
    I2C_LCD1602.backlight_on()
    basic.pause(5000)
basic.forever(on_forever)
