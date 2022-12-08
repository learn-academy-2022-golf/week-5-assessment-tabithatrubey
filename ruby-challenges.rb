# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# Create a method called contain_letter that takes in two parameters, an array and one letter. 
# Iterate through the array using the select method to filter out only the desired output.
# Iterate through all the value variables in the array, where the values contian the given letter.

def contain_Letter array, letter
    array.select {|value| value.include?letter}
end
p contain_Letter(beverages_array, letter_o)
# ["coffee", "soda water"]
p contain_Letter(beverages_array, letter_t)
# ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
# I was stuck on this for what felt like hours. I started to create the method before the array with the hash was defined, so I couldn't understand why my method wasn't working when I would pass us_states as the argument. us_states was an undefined local variable and not in my scope since I created a method before I declared it. oh. my. goodness. rookie mistake. 
us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Create a method called alpha_order and pass in an array as the parameter. 
def alpha_order array
  # Use dot notation with values to lcoation the values associated with their respective keys, then flatten the array so there are not embedded arrays inside the overall array. Then, add sort after we flatten so the whole array is being sorted alphabetically, as opposed to each embedded array.
  array.values.flatten.sort
end
p alpha_order(us_states)


# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

class Bike 
  attr_accessor :model, :wheels, :current_speed

  def initialize(model)
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def bike_info 
    "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
  end
end
p trek = Bike.new('Trek') 
p trek.bike_info
#<Bike:0x00007fa6ac0b17d8 @model="Trek", @wheels=2, @current_speed=0>
# "The Trek bike has 2 wheels and is going 0 mph."
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike 
  attr_accessor :model, :wheels, :current_speed, :pedal_faster,

  def initialize(model, current_speed)
    @model = model
    @wheels = 2
    @current_speed = 0
  end
  def bike_info 
    "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
  end
  def pedal_faster(number)
    @current_speed = number
    end
  def brake(number)
    if @current_speed > number
    @current_speed = @current_speed - number
    elsif @current_speed < number
      @current_speed = 0
  end
  end
end

p my_bike = Bike.new
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(28)
p my_bike.brake(5)
p my_bike.brake(25)