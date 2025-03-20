import ActivityKit
import WidgetKit
import SwiftUI

@available(iOSApplicationExtension 16.1, *)
struct LiveActivityWidget: Widget {
  var body: some WidgetConfiguration {
    ActivityConfiguration(for: LiveActivityAttributes.self) { context in
      // Lock screen and banner UI
      VStack(alignment: .leading) {
        Text(context.attributes.title)
          .font(.headline)
        Text(context.state.status)
          .font(.subheadline)
      }
      .padding()
    } dynamicIsland: { context in
      DynamicIsland {
        // Expanded regions for Dynamic Island
        DynamicIslandExpandedRegion(.leading) {
          Text("Leading")
        }
        DynamicIslandExpandedRegion(.trailing) {
          Text("Trailing")
        }
        DynamicIslandExpandedRegion(.bottom) {
          Text("Bottom")
        }
      } compactLeading: {
        Text("L")
      } compactTrailing: {
        Text("T")
      } minimal: {
        Text("Min")
      }
    }
  }
}
