Pushover.net CLI Utility

A handy utility to push notifications to your device from a command line tool.

## Usage:

	pushover [FLAGS] <MESSAGE>

### Parameters:

Get the utility version:
	-V | --version

Set the Pushover application token. (Default is the $PUSHOVER_TOKEN env):
	-T <API_TOKEN> | --token <API_TOKEN>

Set the receiving user/group id. (Default is the $PUSHOVER_USER env):
	-u <USER_ID> | --user <USER_ID>

Optionally set the message title:
	-t <TITLE> | --title <TITLE>

Optionally set the notification sound:
	-s <SOUND> | --sound <SOUND>

Optionally set the message priority: (-1,0,1 default:0)
	-p <PRIORITY> | --prioroty <PRIORITY>

## Example:

    sleep 5 && pushover "Console command finished successfully"

