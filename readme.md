#Ruby Everest
####Two factor authentication for humans

This is a simple concept borrowed from The Bourne Ultimatum. More of a gimmick than anything. Also a good excuse to get accustomed to working with Node. 

1. Two users, Alice and Bob agree on a seed.
2. They both run Ruby Everest on their respective computers, with the previously chosen seed. This generates three columns: 

	* A challenge word
	* A response if okay word
	* A response if under duress word

3. (optional) They can compare the sha1 hash of the generated wordlist to make sure they have the same words.

4. Alice and Bob memorize their challenge/response words on a daily basis.

####Usage Scenario

Alice and Bob both manage a major datacenter, INFRA For remote access, Bob has to call Alice and request a specific one-time authentication token. As an added layer of security, Alice gives Bob a Ruby-Everest authentication challenge. 

**Challenge** Majestic

**Response if OK** Lotting

**Response if Duress** Sprinkles

Under normal circumstances, Bob would respond with _lotting_. 

In the unfortuante scenario that Bob is being forcibly coerced to grant unsavory types access to INFRA, he would respond with _sprinkles_. This would trigger a series of pre-determined protocols within INFRA to handle the intrusion attempt. Note that said protocols would be outside the purview of Ruby Everest, this is simply a tool to indicate that a person is in trouble. 

####Caveats

Please don't consider this to be in any way secure or even remotely useful. The idea came from a movie and I'd rather not be involved in someone getting hurt.

This is my first attempt at a node application so errors are to be expected. Feel free to open an issue if you see anything weird.

####Installation 
Ruby Everest requires `node < v0.10.13`, along with `seededshuffle` (for sorting) and `color` (for output styling). You can install these dependencies automatically by running `npm install` in the Ruby Everest directory.

**You'll also need a wordlist for Ruby Everest to pick words from.** Words should be in a file called `words` consisting of at least 1098 words separated by a newline. There are various sources for this available elsewhere. I used [@atebits/words](https://github.com/atebits/words@atebits/words).

Verify the installation with `npm test`. 

####Usage
Ruby Everest can be called by running `node re.js [seed]` where [seed] is the previously-decided-upon seed. 






