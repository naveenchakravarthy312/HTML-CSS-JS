import secrets
import string

def generate_secure_password(length=16):
    # Define the characters we want to use
    chars = string.ascii_letters + string.digits + string.punctuation
    
    # Generate a random string using the secrets module
    password = ''.join(secrets.choice(chars) for _ in range(length))
    
    return password

def check_strength(password):
    # Basic logic to check if it's a "strong" password
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in string.punctuation for c in password)
    
    score = sum([has_upper, has_lower, has_digit, has_special])
    
    if score == 4 and len(password) >= 12:
        return "Strong"
    elif score >= 3:
        return "Medium"
    else:
        return "Weak"

# --- Main Program ---
new_pass = generate_secure_password(14)
strength = check_strength(new_pass)

print("--- Secure Password Generator ---")
print(f"Generated Password: {new_pass}")
print(f"Security Level:     {strength}")
print("---------------------------------")