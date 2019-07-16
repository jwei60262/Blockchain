# Restore your Wallet Identity

We’ve all forgotten passwords from time to time, and no one is immune from password horror stories!

There are times you may end up needing to restore your wallet identity.

**This could happen for a few reasons**

- You might forget your password.
- You could lose the 2-step verification device.
- The wallet service might even become unavailable.
- It’s also possible that you lose your computer or it gets stolen.

Hopefully none of these things happen, but it’s important to be ready just in case!

To help prepare for situations like this, it’s helpful to know how to restore your bitcoin wallet.

# Ways to Restore a Wallet

If you ever need to restore your wallet, there are 2 ways to do it. You can do it with the wallet words you saved, or with the private keys from when you first created your wallet.

## Use a Seed

One way to restore a wallet is using a seed. The ‘seed’ is the 12 words you were given when creating your wallet. If you can remember these words, you can use them to restore your wallet!

The benefit of restoring your identity using the seed is that it can be much simpler than using the private key. It's easier to remember a list of words than a random string of numbers and letters.

The hardest part to any of this is safely storing or remembering this information for when you need it. Anybody else who discovers the list of words can access the wallet and any funds tied to it.

So be VERY careful!

## Use a Private Key

Another way to restore a wallet is with a private key.

When restoring a wallet using a private key, there are 2 ways to do it. You can either import or sweep this key, and it’s useful to understand the difference.

### Import a Private Key

When importing a private key, you'll have a source wallet and a destination wallet. The destination wallet is likely filled with a group of private keys already. To import the key you move the private key from the source wallet to the destination wallet.

This results in you getting access to both the source wallet AND the destination wallet.

The downside to importing is that the private key from the source wallet is essentially compromised since it was shared. If someone gets access to the private key from the source wallet, they can access those bitcoins.

See more on how to import a private key at [BitcoinElectrum.com](https://bitcoinelectrum.com/importing-your-private-keys-into-electrum/).

### Sweep a Private Key

When you sweep a private key, you add a private key from a source wallet into the destination wallet. All the bitcoins that belong to that private key are swept from the source wallet over into the destination wallet.

This is a little different than importing because it completely removes the funds from the original wallet. You’ll now only be using this new wallet to make future transactions.

See more on how to sweep a private key at [BitcoinElectrum.com](https://bitcoinelectrum.com/sweeping-your-private-keys-into-electrum/).



# Which should you choose?

Why would you import or sweep a private key?

Sweep a wallet if you're worried about wallet security.This might happen in the case that you think someone might have access to your private key. Sweeping completely cleans out the wallet so that no one will have access to your bitcoins.

If you are certain no one has gotten access to your private key, and that no one ever will, then you can import the key instead. This is useful in cases where you need the funds to be available from multiple wallets.

When in doubt, stick with sweeping. It’s more secure this way, and it avoids some problems that are associated with importing a wallet.

