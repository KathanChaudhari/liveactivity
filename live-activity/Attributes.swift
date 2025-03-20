import ActivityKit
import Foundation

struct LiveActivityAttributes: ActivityAttributes {
  public struct ContentState: Codable, Hashable {
    // Customize the state values as needed
    var status: String
  }
  
  // Static attributes (e.g., a title or identifier)
  var title: String
}
