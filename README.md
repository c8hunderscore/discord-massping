# Discord Massping

A small massping script which runs directly in Discord, just paste it into the JavaScript console.

## DISCLAIMER: I, THE CREATOR OF THIS SCRIPT, AM NOT RESPONSIBLE FOR ANY ACTION DISCORD TAKES ON YOUR ACCOUNT FOR USING THIS SCRIPT. MASSPINGING IS AGAINST DISCORD'S TERMS OF SERVICE AND CAN LEAD TO A BAN; USE AT YOUR OWN WILL.

## How?

- Step 1: Open DevTools (ctrl+shift+i or F12)
- Step 2: Go to the "console" tab
- Step 3: Paste the code and press enter

## Config

At the top of the script, there is a `cfg` object, you can edit it to suit your needs:

### Footer

Don't change this, it asks you for a footer when you run the script.

### Time Gap

I recommend only changing this if slowmode is enabled, the time gap is in milliseconds, to change it to seconds or minutes multiply:

#### Seconds

Multiply by 1000: `time_gap: 30 * 1000,` (30 seconds)

#### Minutes

Multiply by 60000: `time_gap: 30 * 60000,` (30 minutes)

or multiply by 1000 then 60: `time_gap: 30 * 1000 * 60,` (also 30 minutes)

### Loop Count

How many times to ping everyone, feel free to change this to whatever you like!

To loop forever, change it to `Infinity`: `loop_count: Infinity,`

