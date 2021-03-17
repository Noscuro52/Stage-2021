import Jetson.GPIO as GPIO
import time

# Pin Definitions
but_pin = 'DAP4_SCLK'  # BOARD pin 12, BCM pin 18

def main():
    # Pin Setup:
    # Board pin-numbering scheme
    GPIO.setmode(GPIO.TEGRA_SOC)
    # set pin as an output pin with optional initial state of HIGH
   # GPIO.setup(output_pin, GPIO.IN)
    GPIO.setup(but_pin, GPIO.IN)  # Button pin set as input
    
    print("Starting demo now! Press CTRL+C to exit")
    #curr_value = GPIO.HIGH
    
    try:
        while True:
            time.sleep(0.5)
            curr_value = GPIO.input(but_pin)
            # Toggle the output every second
            #print("Outputting {} to pin {}".format(curr_value, output_pin))
            #print(GPIO.output_pin.get_data()[-1])
            print(curr_value)
            #print("Outputting {} to pin {}".format(curr_value, output_pin))
            #GPIO.output(output_pin, curr_value)
            #curr_value ^= GPIO.HIGH
    finally:
        GPIO.cleanup()

if __name__ == '__main__':
    main()
